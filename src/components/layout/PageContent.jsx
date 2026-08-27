function PageContent({ children }) {

    return (

        <div
            className="w3-main"
            style={{
                marginTop: '43px'
            }}
        >

            <header
                className="w3-container"
                style={{
                    paddingTop: '22px'
                }}
            >

                <h5>

                    <b>

                        <i className="fa fa-dashboard"></i>

                        &nbsp; Panel de Recursos Humanos

                    </b>

                </h5>

            </header>


            <div className="w3-container">

                {children}

            </div>

        </div>

    )

}


export default PageContent