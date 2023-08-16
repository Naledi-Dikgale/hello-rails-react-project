import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGreeting } from "../store/greetingReducer";

export default function Greetings() {
  const dispatch = useDispatch();
  const { greeting } = useSelector(state => state.greeting);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  const handler = () => {
    dispatch(fetchGreeting());
  }

  return (
    <div className="">
      <div className="">
        <h1>Greetings</h1>
        <p>{greeting}</p>
      </div>
    </div>
  )
}