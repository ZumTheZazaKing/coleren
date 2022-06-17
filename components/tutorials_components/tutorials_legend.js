const TutorialsLegend = () => {
    return(
        <div className="w-fit mb-8 sm:mb-0 flex flex-col sm:flex-row sm:items-center sm:justify-start">
            <div className="flex mb-2 sm:mb-0 sm:mr-6">
                <div className="w-6 h-6 bg-red-500"></div>
                <p className="font-semibold ml-2">Must have</p>
            </div>
            <div className="flex">
                <div className="w-6 h-6 bg-blue-500"></div>
                <p className="font-semibold ml-2">Nice to have</p>
            </div>
        </div>
    )
}

export default TutorialsLegend;