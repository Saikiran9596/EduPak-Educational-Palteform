-- Create tutors table
CREATE TABLE tutors (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    tagline TEXT,
    qualification TEXT,
    subjects JSONB NOT NULL DEFAULT '[]',
    level_tags JSONB NOT NULL DEFAULT '[]',
    rating DECIMAL(3, 2) DEFAULT 0,
    reviews_count INTEGER DEFAULT 0,
    city TEXT,
    area TEXT,
    modes JSONB NOT NULL DEFAULT '[]',
    price_pkr_per_hour INTEGER,
    verified BOOLEAN DEFAULT FALSE,
    avatar_url TEXT,
    about TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create inquiries table
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    role TEXT NOT NULL,
    requirements TEXT NOT NULL,
    tutor_id TEXT REFERENCES tutors(id)
);

-- Create applications table
CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    qualification TEXT NOT NULL,
    subjects TEXT NOT NULL,
    bio TEXT NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE tutors ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create policies (Allow anyone to read tutors, only authenticated/admin to read inquiries/apps)
-- For demo purposes, we'll allow public read on tutors and public insert on inquiries/apps
CREATE POLICY "Public read tutors" ON tutors FOR SELECT USING (true);
CREATE POLICY "Public insert inquiries" ON inquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Public insert applications" ON applications FOR INSERT WITH CHECK (true);
