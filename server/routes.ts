import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Consultation routes
  app.post("/api/consultations", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      
      console.log(`New consultation created: ${consultation.id} from ${consultation.ownerName}`);
      
      res.json({ 
        success: true, 
        consultation: {
          id: consultation.id,
          ownerName: consultation.ownerName,
          petName: consultation.petName,
          service: consultation.service,
          createdAt: consultation.createdAt
        }
      });
    } catch (error) {
      console.error(`Error creating consultation: ${error}`);
      res.status(400).json({ 
        success: false, 
        error: error instanceof Error ? error.message : "Invalid data" 
      });
    }
  });

  app.get("/api/consultations", async (req, res) => {
    try {
      const consultations = await storage.getConsultations();
      res.json({ success: true, consultations });
    } catch (error) {
      console.error(`Error fetching consultations: ${error}`);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch consultations" 
      });
    }
  });

  app.get("/api/consultations/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const consultation = await storage.getConsultation(id);
      
      if (!consultation) {
        return res.status(404).json({ 
          success: false, 
          error: "Consultation not found" 
        });
      }
      
      res.json({ success: true, consultation });
    } catch (error) {
      console.error(`Error fetching consultation: ${error}`);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch consultation" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
