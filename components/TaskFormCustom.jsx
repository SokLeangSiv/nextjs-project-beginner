"use client"

import { createTaskCustom } from "@/utils/actions";
import { useFormStatus,useFormState } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary join-item" disabled ={pending}>
      {pending ? "Creating..." : "Create"}
    </button>
  );
};

const initialState = {
  message:null
}

const TaskFormCustom = () => {

  const [state, formAction] = useFormState(createTaskCustom,initialState)
  return (
    <form action={formAction}>
      {state.message? <p className="mb-2">{state.message}</p> : null }
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
      </div>

      <SubmitBtn/>
    </form>
  );
};

export default TaskFormCustom;
