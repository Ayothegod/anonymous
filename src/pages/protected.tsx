import { supabaseClient } from "@/lib/supabase";

export async function getServerSideProps() {
    const { data: { user } }: any = await supabaseClient.auth.getUser()

    if (!user) {
        return {
            redirect: { destination: "/signin", permanent: false },
        };
    }
    return { props: { user } };
}
export default function Protected({ user }: any) {
    return (
        <>
            <p>{user.email}</p>
            <p>You are currently viewing a top secret page!</p>
        </>
    );
}