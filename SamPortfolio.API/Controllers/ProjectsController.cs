using Microsoft.AspNetCore.Mvc;
using SamPortfolio.API.Models;

namespace SamPortfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    // Dummy data for now. Later, this will come from a database!
    private static readonly List<ProjectItem> MyProjects = new()
    {
        new ProjectItem 
        { 
            Id = 1, 
            Title = "Personal Portfolio", 
            Description = "A premium, modern portfolio built with vanilla HTML, CSS, and JavaScript.", 
            ImageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800", 
            LiveUrl = "#", 
            TechStack = "HTML, CSS, JS" 
        },
        new ProjectItem 
        { 
            Id = 2, 
            Title = "Fake News Detector", 
            Description = "Machine learning app that analyzes text to determine the likelihood of fake news.", 
            ImageUrl = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800", 
            LiveUrl = "#", 
            TechStack = "Python, ML, Flask" 
        },
        new ProjectItem 
        { 
            Id = 3, 
            Title = "Netflix Clone", 
            Description = "A pixel-perfect UI clone of Netflix featuring dynamic movie cards.", 
            ImageUrl = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800", 
            LiveUrl = "#", 
            TechStack = "React, Tailwind" 
        },
        new ProjectItem 
        { 
            Id = 4, 
            Title = "Bakery Website", 
            Description = "A warm, elegant landing page for a local bakery business.", 
            ImageUrl = "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800", 
            LiveUrl = "#", 
            TechStack = "HTML, CSS" 
        }
    };

    // GET: api/projects
    [HttpGet]
    public ActionResult<IEnumerable<ProjectItem>> GetProjects()
    {
        return Ok(MyProjects);
    }
}