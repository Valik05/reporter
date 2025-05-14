import './reportItem.css';
import Tabs from '../Tabs/Tabs';
import Title from '../Title/Title';
import classNames from "classnames";
import Button from '../Button/Button';
import CustomLink from '../CustomLink/CustomLink';
import EditIcon from '../../../assets/icons/base/edit-icon.svg?react';
import DeleteIcon from '../../../assets/icons/base/delete-icon.svg?react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReport } from '../../../context/useReport';
import type { TaskSuccessResponceBody } from '../../../models/API/TaskAPI';

const ReportItem = ({ id, developer, date, ...props }: TaskSuccessResponceBody) => {
    const navigate = useNavigate();
    const { deleteReport } = useReport();
    const [currentCategory, setCurrentCaregory] = useState<"yesterday" | "today" | "blockers">("yesterday");
    return (
        <li className={classNames('report-item-container')}>
            <article className={classNames('display-container')}>
                <article className={classNames('short-info-box')}>
                    <Title
                        headingLevel={5}
                        text={developer}
                        fontWeight={500}
                    />
                    <Title
                        color="gray"
                        headingLevel={6}
                        fontWeight={500}
                        text={new Date(date).toLocaleDateString("ru", { day: "2-digit", month: "2-digit", year: "numeric" })}
                    />
                </article>
                <article className={classNames('btn-box')}>
                    <Button
                        text="Edit"
                        startIcon={<EditIcon />}
                        onClick={() => navigate(`/report/${id}/edit`)}
                    />
                    <Button
                        color="red"
                        text="Delete"
                        startIcon={<DeleteIcon />}
                        onClick={() => deleteReport({ id })}
                    />
                </article>
            </article>
            <Tabs
                currentValue={currentCategory}
                setCurrentValue={(value: string) => setCurrentCaregory(value as "yesterday" | "today" | "blockers")}
                values={[
                    {
                        title: "Yesterday",
                        value: "yesterday",
                        badge: props.yesterday.length
                    },
                    {
                        title: "Today",
                        value: "today",
                        badge: props.today.length
                    },
                    {
                        title: "Blockers",
                        value: "blockers",
                        badge: props.blockers.length
                    },
                ]}
            />
            <ul className={classNames("task-list-container")}>
                {props[currentCategory as "yesterday" | "today" | "blockers"]
                    .map(({ url, description }, index) =>
                        <li className={classNames("task-item-box")} key={index}>
                            <article className={classNames("task-item-title-box")}>
                                <Title
                                    text={`${index + 1}.Task`}
                                    headingLevel={6}
                                    color="black"
                                    fontWeight={600}
                                />
                                <CustomLink
                                    text={`${url.split("/").reverse()[0]}`}
                                    path={url}
                                />
                            </article>
                            <Title
                                text={`\xa0\xa0\xa0 - ${description}`}
                                headingLevel={6}
                                color="black"
                                fontWeight={300}
                            />
                        </li>
                    )}
            </ul>
        </li>
    )
};

export default ReportItem;
