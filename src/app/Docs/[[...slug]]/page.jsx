const Documentation = async ({ params }) => {
    const { slug } = await params;
    console.log(slug);

    if(slug?.length === 1){
        return (
            <div>
                This doc of Subject {slug[0]}
            </div>
        )
    }

    if(slug?.length === 2){
        return (
            <div>
                This doc of Subject {slug[0]} and the concept is {slug[1]}
            </div>
        )
    }

    return (
        <div>
            This is docs page
        </div>
    );
};

export default Documentation;