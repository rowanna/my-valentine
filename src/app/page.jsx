import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/app/components/layout";
import MainComponent from "@/app/components/sections/MainComponent/MainComponent";

export default function Home() {
  return (
    <>
      <Layout>
        <MainComponent />
      </Layout>
    </>
  );
}
