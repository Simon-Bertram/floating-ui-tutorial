import { h, Component } from "preact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Layout extends Component {
  render() {
    return (
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-1">{this.props.children}</main>

        <footer className="mt-auto">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Layout;
