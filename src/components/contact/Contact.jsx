import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/form-validations';

const Contact = () => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onChange' });
	// Esta parte de arriba mode: 'onChange' es para validar sin pulsar el boton enviar
	// console.log(errors);

	return (
		<form onSubmit={handleSubmit(formSubmit)}>
			<div>
				<label htmlFor='name'>NAME</label>
				<input
					type='text'
					id='name'
					name='name'
					{...register('name', FORM_VALIDATIONS.NAME)}
				/>
				{/* {errors && errors.name && <span>{errors.name.message}</span>} */}
				<span>{errors?.name?.message}</span>
			</div>

			<div>
				<label htmlFor='email'>EMAIL</label>
				<input type='text' id='email' name='email' {...register('email')} />
			</div>

			<input type='submit' value='SEND' />
		</form>
	);
};

const formSubmit = data => {
	// console.log(data);
};

export default Contact;
