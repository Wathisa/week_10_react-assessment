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
  deletingId,
  deleteError,
  onCreateMember,
  onDeleteMember,
  onSelectSection,
}) {
  const [formData, setFormData] = useState(initialFormData)
  const [formError, setFormError] = useState('')
  const normalButtonClass =
    'rounded-lg border border-slate-200 bg-white px-8 py-5 text-lg font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md'
  const activeButtonClass =
    'rounded-lg border border-slate-900 bg-slate-900 px-8 py-5 text-lg font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md'

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
    <main className="mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
        Generation Thailand
        <br />
        Home - Admin Section
      </h1>

      <div className="mt-12 flex flex-wrap justify-center gap-5 sm:gap-8">
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

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-14 rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-slate-950">
          Create User Here
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1fr_1fr_auto]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-lg outline-none transition focus:border-slate-400 focus:bg-white"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-lg outline-none transition focus:border-slate-400 focus:bg-white"
          />
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 text-lg outline-none transition focus:border-slate-400 focus:bg-white"
          />
          <button
            type="submit"
            disabled={isSaving}
            className="rounded-lg bg-indigo-600 px-8 py-4 text-lg font-medium text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
          >
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>

        {(formError || createError) && (
          <p className="mt-4 text-red-500">{formError || createError}</p>
        )}
      </form>

      {deleteError && (
        <p className="mx-auto mt-8 max-w-4xl text-left text-red-500">
          {deleteError}
        </p>
      )}

      <MemberTable
        members={members}
        showActions
        isLoading={isLoading}
        errorMessage={errorMessage}
        deletingId={deletingId}
        onDeleteMember={onDeleteMember}
      />
    </main>
  )
}

export default AdminSection
