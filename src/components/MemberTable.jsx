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
    <div className="mx-auto mt-16 max-w-4xl text-left">
      <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-6 py-3">Name</th>
              <th className="border border-gray-300 px-6 py-3">Last Name</th>
              <th className="border border-gray-300 px-6 py-3">Position</th>
              {showActions && (
                <th className="border border-gray-300 px-6 py-3">Action</th>
              )}
            </tr>
          </thead>

          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={columnCount} className="px-6 py-5 text-gray-500">
                  Loading members...
                </td>
              </tr>
            )}

            {!isLoading && errorMessage && (
              <tr>
                <td colSpan={columnCount} className="px-6 py-5 text-red-500">
                  {errorMessage}
                </td>
              </tr>
            )}

            {!isLoading &&
              !errorMessage &&
              members.map((member) => (
                <tr key={member.id}>
                  <td className="border border-gray-300 px-6 py-3">
                    {member.name}
                  </td>
                  <td className="border border-gray-300 px-6 py-3">
                    {member.lastName || member.lastname}
                  </td>
                  <td className="border border-gray-300 px-6 py-3">
                    {member.position}
                  </td>
                  {showActions && (
                    <td className="border border-gray-300 px-6 py-3">
                      <button
                        type="button"
                        disabled={deletingId === member.id}
                        onClick={() => onDeleteMember(member.id)}
                        className="font-bold text-red-500 transition hover:text-red-700 disabled:cursor-not-allowed disabled:text-red-300"
                      >
                        {deletingId === member.id ? 'Deleting...' : 'Delete'}
                      </button>
                    </td>
                  )}
                </tr>
              ))}

            {!isLoading && !errorMessage && members.length === 0 && (
              <tr>
                <td colSpan={columnCount} className="px-6 py-5 text-gray-500">
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
