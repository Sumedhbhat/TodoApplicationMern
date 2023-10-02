const TextField = ({ register, name, textarea, errors, select }) => {
  return (
    <>
      {textarea || select ? (
        <>
          {select && (
            <select
              className="w-full m-2 p-2 border-2 rounded border-solid border-gray-500"
              {...register(name, { required: true })}
            >
              <option value="todo">Todo</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
          )}
          {textarea && (
            <textarea
              className="w-full border-2 border-gray-500 px-5 py-2 rounded-sm"
              cols="30"
              rows="3"
              placeholder="Add Description Here *"
              {...register(name, { required: true })}
            />
          )}
        </>
      ) : (
        <>
          <input
            type="text"
            className="w-full border-2 border-gray-500 px-5 py-2 rounded-sm my-2"
            placeholder="Add Title *"
            {...register(name, { required: true })}
          />
        </>
      )}
      {errors[name] && (
        <span style={{ color: "red", margin: "4px 0px" }}>
          This field is required
        </span>
      )}
    </>
  );
};

export default TextField;
