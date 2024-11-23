import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";


    export class Service{
    client = new Client();
    databases;
    bucket;
    constructor() {

        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch(error){
        console.log("An unexpected error has occured")
        throw error;
      }
    }

    async updatePost(slug, {title, content, featuredImage, status, userId}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch(error){
        console.log("An unexpected error has occurred")
        throw error;
    }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionid,
                slug,
            ) 
            return true;
        } catch(error){
            console.log("An unexpected error has occurred")
            return false;
        }
    }

    async getPost (slug){
        try{
            await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionid,
                slug
            )

        } catch(error){
            console.log("An unexpectd error has occurred")
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionid,
                queries
            )
        }catch(error){
            console.log("An unexpected error has occurered")
            return false
        }
    }

    //file upload service

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("An unexpected error has occurred")
            return false
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        }catch(error){
            console.log("An unexpected erorr has occurred")
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service = new Service()
export default service