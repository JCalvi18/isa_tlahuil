import Intro from "../components/Intro";
import Description from "../components/Description";
import Samples from "../components/Samples";
import Preferences from "../components/Preferences";
import Offering from "../components/Offering";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Intro />
      <Description />
      <Samples />
      <Preferences />
      <Offering />
      <Contact />
      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-100 dark:bg-zinc-900">
        <p>&copy; {new Date().getFullYear()} Isa Tlahuilxochitl. All rights reserved.</p>
      </footer>
    </main>
  );
}
