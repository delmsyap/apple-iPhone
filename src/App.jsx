import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Model from "./components/Model";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <main className='bg-black'>
            <NavBar/>
            <Hero/>
            <HighLights />
            <Model />
        </main>
    )
}
export default App
