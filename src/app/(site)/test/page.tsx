"use client";

import React from "react";
import Button from "../../../compoments/Button/Button";
import styles from "./test.module.css";

export default function Page() {

  const test = (text:string) => {
    console.log("test " + text);
  }

  return (
    <>
      <div>
        <Button className={styles["button-item"]} size="small" onClick={() => test("tt1")} >small</Button>
        <Button className={styles["button-item"]} onClick={() => test("tt2")} >midium</Button>
        <Button className={styles["button-item"]} size="large" onClick={() => test("tt3")} >large</Button>
        <Button className={styles["button-item"]} bordered={false} size="large" onClick={() => test("tt4")} >large</Button>
        <Button className={styles["button-item"]} text={true} onClick={() => test("tt5")} >text</Button>
      </div>
      <div>
        <Button className={styles["button-item"]} type="default" >default</Button>
        <Button className={styles["button-item"]} type="success" >success</Button>
        <Button className={styles["button-item"]} type="primary" >primary</Button>
        <Button className={styles["button-item"]} type="warning" >warning</Button>
        <Button className={styles["button-item"]} type="info" >info</Button>
        <Button className={styles["button-item"]} type="error" >error</Button>
      </div>
      <div>
        <Button className={styles["button-item"]} secendary type="default" >default</Button>
        <Button className={styles["button-item"]} secendary type="success" >success</Button>
        <Button className={styles["button-item"]} secendary type="primary" >primary</Button>
        <Button className={styles["button-item"]} secendary type="warning" >warning</Button>
        <Button className={styles["button-item"]} secendary type="info" >info</Button>
        <Button className={styles["button-item"]} secendary type="error" >error</Button>
      </div>
    </>
  );
}