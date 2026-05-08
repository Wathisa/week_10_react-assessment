function MemberTable({
  members,
  showActions = false,
  isLoading,
  errorMessage,
  deletingId = '',
  onDeleteMember,
}) {
  const columnCount = showActions ? 4 : 3

  return (
    <div className="mx-auto mt-14 max-w-5xl text-left">
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="border border-slate-800 px-6 py-4 font-semibold">
                Name
              </th>
              <th className="border border-slate-800 px-6 py-4 font-semibold">
                Last Name
              </th>
              <th className="border border-slate-800 px-6 py-4 font-semibold">
                Position
              </th>
              {showActions && (
                <th className="border border-slate-800 px-6 py-4 font-semibold">
                  Action
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={columnCount} className="px-6 py-6 text-slate-500">
                  Loading members...
                </td>
              </tr>
            )}

            {!isLoading && errorMessage && (
              <tr>
                <td colSpan={columnCount} className="px-6 py-6 text-red-500">
                  {errorMessage}
                </td>
              </tr>
            )}

            {!isLoading &&
              !errorMessage &&
              members.map((member) => (
                <tr key={member.id} className="transition hover:bg-slate-50">
                  <td className="border border-slate-200 px-6 py-4">
                    {member.name}
                  </td>
                  <td className="border border-slate-200 px-6 py-4">
                    {member.lastName || member.lastname}
                  </td>
                  <td className="border border-slate-200 px-6 py-4">
                    {member.position}
                  </td>
                  {showActions && (
                    <td className="border border-slate-200 px-6 py-4">
                      <button
                        type="button"
                        disabled={deletingId === member.id}
                        onClick={() => onDeleteMember(member.id)}
                        className="rounded-full px-4 py-2 font-semibold text-red-500 transition hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:text-red-300"
                      >
                        {deletingId === member.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </td>
                  )}
                </tr>
              ))}

            {!isLoading && !errorMessage && members.length === 0 && (
              <tr>
                <td colSpan={columnCount} className="px-6 py-6 text-slate-500">
                  No members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MemberTable
