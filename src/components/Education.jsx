import './Education.css'

function Education(props) {
    return (
        <section id='education' className='pt-16 px-4 md:px-0 md:pt-12'>
            <h2 className='text-[2.5rem] py-[1.5rem] md:pt-12'>🎓 Educación</h2>
            <div className="max-w-[768px] w-full mx-auto flex flex-col items-center text-center gap-6">
                <div className="w-full flex flex-col items-center bg-[#fafdff] border-2 border-[#bee6f9] rounded-lg p-4 md:p-5 shadow-lg">
                    <h3 className='my-2 text-base md:text-xl text-[#333]'> {props.title} </h3>
                    <p className='my-2 text-sm md:text-base text-[#666]'> {props.date} </p>
                    <p className='my-2 text-sm md:text-base text-[#666]'> {props.languaje} </p>
                </div>
            </div>
        </section>
    )
}

export default Education