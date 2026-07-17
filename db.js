/*
GID: 1007
PID: BT-007
FILE: db.js
PROJECT: BeB Tower
VERSION: 1.1.0
DATE: 2026-07-16
AUTHOR: BeB
STATUS: ACTIVE
PURPOSE: CENTRAL DATA LAYER
*/

const BeBDB = {

    STORAGE_KEY: "beb_tower_database_v1",

    defaultData: {

        meta: {
            project: "BeB Tower",
            version: "1.1.0",
            created: new Date().toISOString()
        },

        notes: [],

        notebooks: [],

        captures: [],

        ideas: [],

        projects: [],

        library: {

            books: [],

            movies: [],

            music: []

        },

        academy: {

            courses: []

        },

        archive: [],

        storage: [],

        settings: {

            language: "fa",

            theme: "purple-raindrops"

        }

    },

    load() {

        const data =
            localStorage.getItem(
                this.STORAGE_KEY
            );

        if (!data) {

            this.save(
                this.defaultData
            );

            return structuredClone(
                this.defaultData
            );

        }

        try {

            return JSON.parse(data);

        } catch {

            this.save(
                this.defaultData
            );

            return structuredClone(
                this.defaultData
            );

        }

    },

    save(data) {

        localStorage.setItem(
            this.STORAGE_KEY,
            JSON.stringify(data)
        );

    },

    backup() {

        return JSON.stringify(
            this.load(),
            null,
            2
        );

    },

    reset() {

        this.save(
            structuredClone(
                this.defaultData
            )
        );

    },

    add(collection, item) {

        const db = this.load();

        if (!db[collection]) return false;

        db[collection].unshift(item);

        this.save(db);

        return true;

    },

    update(collection, id, updates) {

        const db = this.load();

        const item =
            db[collection]?.find(
                x => x.id === id
            );

        if (!item) return false;

        Object.assign(
            item,
            updates
        );

        this.save(db);

        return true;

    },

    remove(collection, id) {

        const db = this.load();

        if (!db[collection])
            return false;

        db[collection] =
            db[collection].filter(
                x => x.id !== id
            );

        this.save(db);

        return true;

    },

    get(collection) {

        const db = this.load();

        return db[collection] || [];

    },

    stats() {

        const db = this.load();

        return {

            notes:
                db.notes.length,

            notebooks:
                db.notebooks.length,

            captures:
                db.captures.length,

            ideas:
                db.ideas.length,

            projects:
                db.projects.length,

            books:
                db.library.books.length,

            movies:
                db.library.movies.length,

            music:
                db.library.music.length,

            archive:
                db.archive.length,

            storage:
                db.storage.length

        };

    }

};

window.BeBDB = BeBDB;