export default function SessionData() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-xl font-bold">現在のセッションデータ</h2>
      <p>
        この例では、機密情報を公開しないために、ユーザーオブジェクトの一部のフィールドのみがページに渡されます。
      </p>
      <div className="flex flex-col rounded-md bg-neutral-100">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">Session</div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all"></pre>
      </div>
    </div>
  );
}
