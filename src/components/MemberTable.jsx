function MemberTable({ members, showActions = false }) {
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
            {members.map((member) => (
              <tr key={member.id}>
                <td className="border border-gray-300 px-6 py-3">{member.name}</td>
                <td className="border border-gray-300 px-6 py-3">
                  {member.lastName}
                </td>
                <td className="border border-gray-300 px-6 py-3">
                  {member.position}
                </td>
                {showActions && (
                  <td className="border border-gray-300 px-6 py-3">
                    <button type="button" className="font-bold text-red-500">
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MemberTable
