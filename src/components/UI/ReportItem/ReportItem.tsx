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
import { useUser } from '../../../context/useUser';
import { useReport } from '../../../context/useReport';
import { useFilter } from '../../../context/useFilter';
import type { TaskSuccessResponceBody } from '../../../models/API/TaskAPI';

const ReportItem = ({ _id, user_id, developer, date, ...props }: TaskSuccessResponceBody) => {
    const { user } = useUser();
    const navigate = useNavigate();
    const { usersList } = useFilter();
    const { deleteReport, getReport } = useReport();
    const [currentCategory, setCurrentCaregory] = useState<"yesterday" | "today" | "blockers">("yesterday");
    return (
        <li className={classNames('report-item-container')}>
            <article className={classNames('display-container')}>
                <article className={classNames('short-info-box')}>
                    <Title
                        headingLevel={5}
                        text={`${developer} (${usersList.find(el => el.user_id === user_id)?.full_name})`}
                        fontWeight={500}
                    />
                    <Title
                        color="gray"
                        headingLevel={6}
                        fontWeight={500}
                        text={new Date(date).toLocaleDateString("ru", { day: "2-digit", month: "2-digit", year: "numeric" })}
                    />
                </article>
                {user_id === user!.user_id && <article className={classNames('btn-box')}>
                    <Button
                        text="Edit"
                        startIcon={<EditIcon />}
                        onClick={() => {
                            getReport({ _id })
                            navigate(`/report/${_id}/edit`)
                        }}
                    />
                    <Button
                        color="red"
                        text="Delete"
                        startIcon={<DeleteIcon />}
                        onClick={() => deleteReport({ _id })}
                    />
                </article>}
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
                                text={`\xa0\xa0\xa0 - ${description.split(/\r?\n/).join("\n\xa0\xa0\xa0 -")}`}
                                headingLevel={6}
                                color="black"
                                fontWeight={300}
                            />
                        </li>
                    )}
            </ul>
        </li >
    )
};

export default ReportItem;
