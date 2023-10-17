import ImageTitle from "./ImageTitle";

export default function TitleDescription() {
    return (
        <>
            <div className="row flex justify-between ">
                <div className="col-6">
                    <h1 className="main-title text-6xl font-semibold text-orange-500 mb-5">Звязатися з нами</h1>
                    <p className=" text-2xl">Залиш нам повідомлення, а ми відповімо якнайшвидше</p>
                </div>
                <ImageTitle />
            </div>
        </>
    );
}
