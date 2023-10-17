import ButtonSubmitForm from "./ButtonSubmitForm";
import CheckBox from "./CheckBox";
import InputForm from "./Input-form";

export default function FormWrap() {
    return (
        <>
            <div className="row">
                <form
                    className="bg-green-100 p-10 flex flex-wrap gap-2 mx-auto"
                    action="#">

                    {/* <label for="name"></label>
                    <input type="text" id="name" name="name" placeholder="Ім'я та прізвище" required /> */}
                    <InputForm
                        className="border-b-2 border-green-400 mb-2 mt-2 w-full inline-block"
                        placeholderName="Ім'я та прізвище"
                        idName="name"
                        nameUser="nameUser"
                        typeName="text"
                    />

                    {/* <label for="email"></label>
                <input type="email" id="email" name="email" placeholder="Email" required /> */}
                    <InputForm
                        className="border-b-2 border-green-400 mb-2 mt-2 w-full inline-blocks"
                        placeholderName="Email"
                        idName="email"
                        nameUser="nameUser"
                        typeName="text" />

                    {/* <label for="phone"></label>
                    <input type="tel" id="phone" name="phone" placeholder="Телефон (у форматі +380)" required /> */}
                    <InputForm
                        className="border-b-2 border-green-400 mb-2 mt-2 w-full"
                        placeholderName="Телефон (у форматі +380)"
                        idName="telephone"
                        nameUser="nameUser"
                        typeName="text"
                    />

                    {/* <label for="message"></label>
                    <input type="tel" id="phone" name="phone" placeholder="Повідомлення" required /> */}
                    <InputForm
                        className="border-b-2 border-green-400 w-full block mb-2 mt-2"
                        placeholderName="Повідомлення"
                        idName="telephone"
                        nameUser="userTel"
                        typeName="text"
                    />

                    {/* <label for="subscribe">Надсилати мені оновлення про академію</label>
                    <input type="checkbox" id="subscribe" name="subscribe" value="yes" /> */}
                    <CheckBox
                        classNameWrap="w-full flex mb-2 mt-2"
                        classNameInput="mr-1"
                        typeName="checkbox"
                        idName="checkedEmail"
                        nameUser="userEmail"
                        textMessage="Надсилати мені оновлення про академію"
                    />

                    <ButtonSubmitForm
                        className="mx-auto mt-2 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900"
                        buttonMassage="Надіслати"
                        typeName="submit"
                    />
                </form>
            </div >
        </>
    );
}
