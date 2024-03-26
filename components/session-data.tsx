import type { Session } from "next-auth";

export default function SessionData({ session }: { session: Session | null }) {
  if (session?.user) {
    return (
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-bold">現在のセッションデータ</h2>
        {Object.keys(session.user).length > 3 ? (
          <p>
            この例では、生のユーザーオブジェクトを含むセッションオブジェクト全体がページに渡されます。生のユーザーオブジェクトには機密情報が含まれている可能性があるため、ページには必要なフィールドのみを渡すことをお勧めします。
          </p>
        ) : (
          <p>
            この例では、機密情報を公開しないために、ユーザーオブジェクトの一部のフィールドのみがページに渡されます。
          </p>
        )}
        <div className="flex flex-col rounded-md bg-neutral-100">
          <div className="p-4 font-bold rounded-t-md bg-neutral-200">
            Session
          </div>
          <pre className="py-6 px-4 whitespace-pre-wrap break-all">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <p>
      No session data, please <em>Sign In</em> first.
    </p>
  );
}
