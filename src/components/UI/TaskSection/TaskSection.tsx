import './taskSection.css';
import Title from '../Title/Title';
import classNames from 'classnames';
import Button from '../Button/Button';
import TaskItem from '../TaskItem/TaskItem';
import CustomEmpty from '../CustomEmpty/CustomEmpty';
import AddIcon from "../../../assets/icons/base/add-icon.svg?react";
import type { TaskSectionProps } from '../../../models/Task/Task';


const TaskSection = ({ title, fieldName, fields, append, remove }: TaskSectionProps) => {
    return (
        <article className={classNames('task-section-container')}>
            <Title
                headingLevel={3}
                text={title}
                fontWeight={400}
                style={{ textAlign: "center" }}
            />
            {fields.length > 0
                ? fields.map((_, index) => <TaskItem fieldName={fieldName} remove={remove} index={index} />)
                : <CustomEmpty />
            }
            <Button
                text="Add Task"
                startIcon={<AddIcon />}
                onClick={() => append({ url: "", description: "" })}
            />
        </article>
    )
};

export default TaskSection;
