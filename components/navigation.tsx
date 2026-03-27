export default function Navigation() {
    return (
        
        <nav className=" bg-gray-800 text-white p-4">
            <ul className=" flex space-x-4">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/admin/about">Admin</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/fetchData">Fetch Data</a></li>
                <li><a href="/fetchDataClientComponent">FetchDataUsingButton</a></li>
                <li><a href="/serverComponentDataFetch">serverComponent</a></li>
                <li><a href="/clientComponentDataFetch">clientComponent</a></li>
                <li><a href="/admin/user/abdullah">Admin User (Dynamic Route)</a></li>
            </ul>
        </nav>
    )
}