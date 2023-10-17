
export default function ButtonSubmitForm({ className, buttonMassage, typeName }) {
    return (
        <button className={className} type={typeName}>{buttonMassage}</button>
    );
}
