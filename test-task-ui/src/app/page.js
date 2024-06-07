import Image from "next/image";
import styles from "./page.module.css";
import Header from "./component/Header";
import VideoPlayer from "./component/VideoPlayer";
import Profile from "./component/Profile";
import GridSection from "./component/GridSection";
import FormSection from "./component/FormSection";

export default function Home() {
  return (
    <>
      <Header/>
      <VideoPlayer/>
      <GridSection/>
      <Profile/>
      <FormSection/>
    </>
  );
}
