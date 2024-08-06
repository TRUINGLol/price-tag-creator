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

//Get tag by count
app.MapGet("api/tag", (string count) =>
{
    List<TagsHtml> tags = new List<TagsHtml>();
    using(AplicationContext db = new AplicationContext())
    {
        if (string.IsNullOrWhiteSpace(count))
        {
            return Results.Content("query is null or white space");
        }

        try
        {
            var tagsDB = db.tagsHtml.Where(d => d.id <= Int32.Parse(count)).ToList();

            foreach (TagsHtml item in tagsDB)
            {
                tags.Add(item);
            }
        }
        catch(Exception ex)
        {
            Results.Content(ex.Message);
        }
    }
    return Results.Json(tags);

});

app.Run();
