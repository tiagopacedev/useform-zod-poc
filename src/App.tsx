import './index.css'

import { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// 1. Define zod schema for validation
const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Invalid email address' }),
  age: z.coerce.number().int().min(18, { message: 'Age must be at least 18' }),
  address: z.string(),
  phoneNumber: z.string().min(10, { message: 'Phone number must be at least 10 digits long' }),
})

// 2. Type for form data based on zod schema
type FormData = z.infer<typeof schema>

function App() {
  const [output, setOutput] = useState('')

  // 3. Use form hook with zod resolver and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const handleCreateUser = (data: FormData) => {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <div>
      <h2>Form Validation</h2>

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" {...register('age')} />
          <p>{errors.age?.message}</p>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input id="address" {...register('address')} />
          <p>{errors.address?.message}</p>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input id="phoneNumber" type="number" {...register('phoneNumber')} />
          <p>{errors.phoneNumber?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>

      {output && <pre>{output}</pre>}
    </div>
  )
}

export default App
