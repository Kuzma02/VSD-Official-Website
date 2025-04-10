const TitleAndSubtitle = ({title, subtitle}: { title: string; subtitle: string; }) => {
    return <div>
        <h2
            className={"uppercase text-7xl text-white font-bold text-center sm:mb-3 max-sm:mb-2 max-lg:text-6xl max-md:text-5xl max-sm:text-4xl"}>{title}</h2>
        <p className="text-white uppercase font-bold text-4xl text-center max-lg:text-3xl max-md:text-2xl max-sm:text-xl">{subtitle}</p>
    </div>
}

export default TitleAndSubtitle;