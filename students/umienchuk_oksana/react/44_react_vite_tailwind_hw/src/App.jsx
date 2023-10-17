import FormWrap from "./components/form-wrap/FormWrap";
import TitleDescription from "./components/title-form/TitleDescription";

export default function App() {
    return (
        <>
            <section className="container p-8 mx-auto">
                <TitleDescription />
                <FormWrap />
            </section >
        </>
    );
}
