import Warning from "./Warning";

export default function textarea({
  value,
  error,
  onChange
}: {value: string, error: string, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void}) {
  return (
    <div className="textarea">
      <textarea
        value={value}
        onChange={onChange}
      ></textarea>

      {error && <Warning message={error} />}
    </div>
  )
}
