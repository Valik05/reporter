import './reportHistory.css';
import classNames from "classnames";
import Title from '../UI/Title/Title';
import Select from '../UI/Select/Select';
import ReportItem from '../UI/ReportItem/ReportItem';
import CustomEmpty from '../UI/CustomEmpty/CustomEmpty';
import ReportHistoryIcon from "../../assets/icons/nav/report-history-icon.svg?react";
import { useEffect } from 'react';
import { useFilter } from '../../context/useFilter';
import { useReport } from '../../context/useReport';
import { Datepicker } from '../UI/DatePicker/Datepicker';
import { FormProvider, useForm } from 'react-hook-form';
import type { TaskRequestQueries } from '../../models/API/TaskAPI';

const ReportHistory = () => {
    const form = useForm<TaskRequestQueries>();
    const { watch } = form;
    const { usersList } = useFilter();
    const { getReportList, reportList } = useReport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { if (watch("date")) getReportList(watch(), true) }, [watch("date")])
    return (
        <FormProvider {...form}>
            <form className={classNames('report-history-container')}
                onChange={() => {
                    if (watch("date") || watch("owner_id")) getReportList(watch(), true)
                }}>
                <article className={classNames('title-container')}>
                    <ReportHistoryIcon />
                    <Title
                        text="Report History"
                        fontWeight={700}
                        headingLevel={2}
                        color="light-blue"
                    />
                </article>
                <article className={classNames('filter-container')}>
                    <Datepicker
                        name='date'
                        id='date-picker'
                    />
                    <Select
                        id="users"
                        name="owner_id"
                        placeholder="Choose User"
                        selectItems={usersList.map(item => ({ value: item.user_id, title: item.full_name }))}
                    />
                </article>
                {reportList.length !== 0 ?
                    <ul className={classNames('report-list-container')}>
                        {reportList.map((item, index) => <ReportItem {...item} key={index} />)}
                    </ul>
                    :
                    <CustomEmpty />
                }
            </form>
        </FormProvider>
    )
};

export default ReportHistory;
