
export default function InputForm({ className, placeholderName, idName, nameUser, typeName }) {
    return (
        <>
            <label className="w-1/2">
                <input
                    className={className}
                    type={typeName}
                    id={idName}
                    name={nameUser}
                    placeholder={placeholderName}
                    style={{ backgroundColor: "transparent" }}
                    required
                />
            </label>
        </>
    );
}
