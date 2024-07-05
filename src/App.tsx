import './index.css'

import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm()

  const handleCreateUser = (data: any) => {
    console.log(data)
  }

  return (
    <div>
      <h2>Form Validation</h2>

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" {...register('name')} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" {...register('email')} />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" {...register('age')} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input id="address" {...register('address')} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input id="phoneNumber" type="number" {...register('phoneNumber')} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
