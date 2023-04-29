
const Select = ({ register, data, name }) => {
    return (
        <select {...register(name)} className="w-full rounded font-sans">
            {
                data?.map((value) => {
                    return (
                        <option key={value}>
                            {value}
                        </option>
                    )
                })
            }
        </select>
    )
}

export default Select