import './reportCreater.css';
import classNames from 'classnames';
import Title from '../UI/Title/Title';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import TaskSection from '../UI/TaskSection/TaskSection';
import FileIcon from "../../assets/icons/base/file-icon.svg?react";
import SaveIcon from "../../assets/icons/base/save-icon.svg?react";
import { useEffect } from 'react';
import { getDay } from '../../utils/getDay';
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/useUser';
import { useReport } from '../../context/useReport';
import { Datepicker } from '../UI/DatePicker/Datepicker';
import { LOCAL_STORAGE } from '../../enums/localStorage';
import { useSystemMsg } from '../../context/useSystemMsg';
import type { TaskRequestBody } from '../../models/API/TaskAPI';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';

const ReportCreater = ({ mode = "create" }: { mode?: "create" | "edit" }) => {
    const { user } = useUser();
    const { report_id } = useParams();
    const { showSystemMsg } = useSystemMsg();
    const { report, createReport, updateReport } = useReport();
    const form = useForm<TaskRequestBody>({
        defaultValues: {
            yesterday: [],
            today: [],
            blockers: []
        }
    });
    const { control, reset, handleSubmit, setValue } = form;
    const today = useFieldArray({ control, name: "today" });
    const blockers = useFieldArray({ control, name: "blockers" });
    const yesterday = useFieldArray({ control, name: "yesterday" });

    useEffect(() => { if (mode === "edit" && report) reset(report) }, [report, mode, reset])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { if (user?.developer_name && mode === "create") setValue("developer", user.developer_name) }, [mode])
    useEffect(() => { if (mode === "create") setValue("date", new Date()) }, [mode, setValue])

    const onSubmit = (dates: TaskRequestBody) => {
        console.log(dates);
        if (!localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN)) return showSystemMsg({ text: "Sign in please", type: "error" })
        if (mode === "create") createReport(dates)
        if (mode === "edit") updateReport({ _id: report_id!, ...dates })
    }

    return (
        <FormProvider {...form}>
            <section className={classNames('report-creater-container')}>
                <article className={classNames('title-container')}>
                    <FileIcon />
                    <Title
                        color="light-blue"
                        headingLevel={1}
                        text='Report Creater'
                        fontWeight={700}
                        style={{ textAlign: "center" }}
                    />
                </article>
                <article className={classNames("inputs-container")}>
                    <Input
                        name='developer'
                        id='developer-id'
                        label='Name'
                        placeholder='Enter developer name'
                        options={{
                            required: "Developer name is required",
                            maxLength: {
                                value: 32,
                                message: "32 symbols limit"
                            }
                        }}
                    />
                    <Datepicker
                        name='date'
                        id='date-picker'
                        label='Date'
                        minDate={getDay("yesterday")}
                        maxDate={getDay("tomorrow")}
                        options={{
                            required: mode !== "edit" ? "Date is required" : undefined,
                            disabled: mode === "edit"
                        }}
                    />
                </article>
                <article className={classNames('task-sections')}>
                    <TaskSection
                        title='Yesterday'
                        fieldName={'yesterday'}
                        {...yesterday}
                    />
                    <TaskSection
                        title='Today'
                        fieldName={'today'}
                        {...today}
                    />
                    <TaskSection
                        title='Blockers'
                        fieldName={'blockers'}
                        {...blockers}
                    />
                </article>
                <article className="footer-btn">
                    <Button
                        startIcon={<SaveIcon />}
                        text="Save Report"
                        onClick={handleSubmit(onSubmit)}
                    />
                </article>
            </section>
        </FormProvider>
    )
};

export default ReportCreater;
