import gitHubLogo from "../assets/image/githubLogo.png"
function Footer(){
    return (
        <footer className="footer">
            <h3>You can find the documentation here ➡️ </h3>
            <a href="https://github.com/Vxctor11/Recipe-Book-app" target="_blank">
             <img className="footerImg" src={gitHubLogo} alt="gitLogo" />
            </a>     
        </footer>          
    )
}

export default Footer;