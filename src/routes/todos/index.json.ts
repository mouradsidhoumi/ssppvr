import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persist in database
let todos: Todo[] = [];

// GET
export const get: RequestHandler = async () => {
    return {
      status: 200,
      body: todos
    }
};

// POST
export const post: RequestHandler = async ({ request }) => {
    const formData = await request.formData();

    todos.push({
        created_at: new Date(),
        text: formData.get('text') as string,
        done: false
    });
    
    return {
        status: 303,
        headers: {
            location: "/"
        }
    };
};