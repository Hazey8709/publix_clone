import Header from "./components/Header";

function App() {
    return (
        <div style={style.appCont}>
            <Header promotionTitle='Sale Starts Today!' />
        </div>
    );
}

export default App;

const style = {
    // appCont: {
    //     border: ".1rem solid green",
    //     width: "100%",
    //     height: "100%",
    // },
};
