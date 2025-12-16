export type Lesson = { 
    id: string,
    title: string,
    level: number,
    language: string,
    created_at?: string,
    lesson_items?: LessonItems[]
}

export type LessonItems = {
    id: string
    lesson_id: Lesson['id']
    prompt_text: string
    expected_text: string
    created_at: string
}