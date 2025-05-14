import './taskItem.css';
import Title from '../Title/Title';
import Input from "../Input/Input";
import classNames from "classnames";
import Button from '../Button/Button';
import Textarea from '../Textarea/Textarea';
import DeleteIcon from '../../../assets/icons/base/delete-icon.svg?react';
import { URLregexp } from '../../../regexp/URLregexp';
import type { TaskItemProps } from '../../../models/Task/Task';

const TaskItem = ({ fieldName, index, remove }: TaskItemProps) => {
    return (
        <article className={classNames("task-item-container")}>
            <article className={classNames('title-box')}>
                <Title
                    headingLevel={5}
                    text={`Task ${index + 1}`}
                    fontWeight={400}
                />
                <Button
                    color='red'
                    classes={['icon']}
                    children={<DeleteIcon />}
                    onClick={() => remove(index)}
                />
            </article>
            <Input
                type="url"
                label="Task URL"
                classes={['fullwidth']}
                placeholder="Enter url"
                id={`${fieldName}-${index}`}
                name={`${fieldName}.${index}.url`}
                options={{
                    required: "URL is required",
                    pattern: {
                        value: URLregexp,
                        message: "Please enter a valid URL"
                    }
                }}
            />
            <Textarea
                options={{ required: "Description is required" }}
                label="Description"
                classes={['fullwidth']}
                id={`${fieldName}-${index}`}
                placeholder="Enter description"
                name={`${fieldName}.${index}.description`}
            />
        </article>
    )
};

export default TaskItem;
