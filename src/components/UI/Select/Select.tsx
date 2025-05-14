// import './select.css';
// import Title from '../Title/Title';
// import classNames from "classnames";
// import { Controller } from 'react-hook-form';


// const Select = () => {
//     return (
//         <Controller
//             name={name}
//             control={control}
//             rules={options}
//             defaultValue={defaultValues && defaultValues[name]}
//             render={({ field, fieldState: { error } }) => (
//                 <article className={classNames('input-content', { error }, classes)}>
//                     {label && <label className={classNames('input-label')} htmlFor={id} ref={ref}>{label}</label>}
//                     <input {...field} id={id} {...inputProps} />
//                     {error && "message" in error &&
//                         <Title
//                             color="red"
//                             headingLevel={6}
//                             fontWeight={500}
//                             text={error.message}
//                         />}
//                     {children}
//                 </article>
//             )
//             }
//         />
//     )
// };

// export default Select;
