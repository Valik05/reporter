import './reportHistory.css';
import classNames from "classnames";
import Title from '../UI/Title/Title';
import ReportItem from '../UI/ReportItem/ReportItem';
import CustomEmpty from '../UI/CustomEmpty/CustomEmpty';
import ReportHistoryIcon from "../../assets/icons/nav/report-history-icon.svg?react";
import { useEffect } from 'react';
import { useReport } from '../../context/useReport';
import { Datepicker } from '../UI/DatePicker/Datepicker';
import { FormProvider, useForm } from 'react-hook-form';
import type { TaskRequestQueries } from '../../models/API/TaskAPI';

const ReportHistory = () => {
    const form = useForm<TaskRequestQueries>();
    const { watch } = form;
    const { getReportList, reportList } = useReport();
    useEffect(() => { getReportList(watch()) }, [getReportList, watch])
    return (
        <FormProvider {...form}>
            <article className={classNames('report-history-container')}>
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
                </article>
                {reportList.length !== 0 ?
                    <ul className={classNames('report-list-container')}>
                        {reportList.map((item, index) => <ReportItem {...item} key={index} />)}
                    </ul>
                    :
                    <CustomEmpty />
                }
            </article>
        </FormProvider>
    )
};

export default ReportHistory;
