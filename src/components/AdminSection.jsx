import { useState } from 'react'
import MemberTable from './MemberTable'

const initialFormData = {
  name: '',
  lastname: '',
  position: '',
}

function AdminSection({
  members,
  activeSection,
  isLoading,
  errorMessage,
  isSaving,
  createError,
  onCreateMember,
  onSelectSection,
}) {
  const [formData, setFormData] = useState(initialFormData)
  const [formError, setFormError] = useState('')
  const normalButtonClass =
    'rounded-md bg-white px-8 py-5 text-lg font-bold shadow-md transition hover:-translate-y-0.5 hover:shadow-lg'
  const activeButtonClass =
    'rounded-md bg-gray-900 px-8 py-5 text-lg font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg'

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const newMember = {
      name: formData.name.trim(),
      lastname: formData.lastname.trim(),
      position: formData.position.trim(),
    }

    if (!newMember.name || !newMember.lastname || !newMember.position) {
      setFormError('Please fill in all fields.')
      return
    }

    setFormError('')

    const isSuccess = await onCreateMember(newMember)

    if (isSuccess) {
      setFormData(initialFormData)
    }
  }

  return (
    <main className="px-6 py-16 text-center">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        Generation Thailand
        <br />
        Home - Admin Section
      </h1>

      <div className="mt-14 flex flex-wrap justify-center gap-10 sm:gap-20">
        <button
          type="button"
          onClick={() => onSelectSection('user')}
          className={
            activeSection === 'user' ? activeButtonClass : normalButtonClass
          }
        >
          User Home Section
        </button>
        <button
          type="button"
          onClick={() => onSelectSection('admin')}
          className={
            activeSection === 'admin' ? activeButtonClass : normalButtonClass
          }
        >
          Admin Home Section
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-14 max-w-6xl text-left">
        <h2 className="text-2xl font-bold">Create User Here</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1fr_1fr_auto]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="rounded-md bg-white px-5 py-4 text-lg outline-none"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="rounded-md bg-white px-5 py-4 text-lg outline-none"
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            className="rounded-md bg-white px-5 py-4 text-lg outline-none"
          />
          <button
            type="submit"
            disabled={isSaving}
            className="rounded-md bg-indigo-500 px-8 py-4 text-lg text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-indigo-300"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>

        {(formError || createError) && (
          <p className="mt-4 text-red-500">{formError || createError}</p>
        )}
      </form>

      <MemberTable
        members={members}
        showActions
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  )
}

export default AdminSection
