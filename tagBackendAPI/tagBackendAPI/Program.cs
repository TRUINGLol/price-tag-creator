using tagBackendAPI.EFcontext;
using tagBackendAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

var app = builder.Build();

app.UseCors(b=>b.AllowAnyOrigin());

//Get all tags from db
app.MapGet("api/tags", () =>
{
    List<TagsHtml> tags = new List<TagsHtml>();
    using(AplicationContext db = new AplicationContext())
    {
        var tagsDB = db.tagsHtml.ToList();
        foreach (TagsHtml item in tagsDB)
        {
            tags.Add(item);
        }
    }
    return Results.Json(tags);
});

//Get tag by
app.MapGet("api/tag/{count}", (string count) =>
{
    List<TagsHtml> tags = new List<TagsHtml>();
    using(AplicationContext db = new AplicationContext())
    {
        var tagsDB = db.tagsHtml.Where(d=>d.id<=Int32.Parse(count)).ToList();

        foreach (TagsHtml item in tagsDB)
        {
            tags.Add(item);
        }
    }
    return Results.Json(tags);
});

app.Run();
