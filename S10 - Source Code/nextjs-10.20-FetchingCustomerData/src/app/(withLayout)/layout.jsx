import Header from "@/components/Layout/Header";

export default function WithLayout({children}){
    return(
        <>
            <Header/>
            <div className="container">
                {children}
            </div>
        </>
    )
}