
export default function CheckBox({ classNameWrap, classNameInput, typeName, idName, textMessage }) {
    return (
        <>
            <div className={classNameWrap}>
                <input className={classNameInput} type={typeName} id={idName} name="subscribe" value="yes" />
                <label htmlFor={idName}>{textMessage}</label>
            </div >
        </>
    );
}
